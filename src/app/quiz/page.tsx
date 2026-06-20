'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { products } from '@/lib/data';

const questions = [
  {
    id: 1,
    question: "How old is your child?",
    options: [
      { label: '1-2 years', value: 'toddler' },
      { label: '2-3 years', value: 'young-toddler' },
      { label: '3-4 years', value: 'preschool' },
      { label: '4-6 years', value: 'school-prep' },
    ],
  },
  {
    id: 2,
    question: "What does your child enjoy most?",
    options: [
      { label: 'Colors & art', value: 'visual' },
      { label: 'Animals & nature', value: 'nature' },
      { label: 'Letters & words', value: 'literacy' },
      { label: 'Numbers & counting', value: 'math' },
    ],
  },
  {
    id: 3,
    question: "What's your main goal?",
    options: [
      { label: 'Reduce screen time', value: 'screen-time' },
      { label: 'School preparation', value: 'school-prep' },
      { label: 'Keep them busy (peace!)', value: 'busy' },
      { label: 'Develop fine motor skills', value: 'motor-skills' },
    ],
  },
];

function getRecommendations(answers: string[]) {
  const recommendations: typeof products = [];
  
  if (answers.includes('visual') || answers.includes('toddler')) {
    recommendations.push(products.find(p => p.id === 'colors-busy-book')!);
    recommendations.push(products.find(p => p.id === 'shapes-busy-book')!);
  }
  if (answers.includes('nature')) {
    recommendations.push(products.find(p => p.id === 'animals-busy-book')!);
    recommendations.push(products.find(p => p.id === 'fruits-vegetables-busy-book')!);
  }
  if (answers.includes('literacy') || answers.includes('school-prep')) {
    recommendations.push(products.find(p => p.id === 'alphabets-busy-book')!);
    recommendations.push(products.find(p => p.id === 'numbers-busy-book')!);
  }
  if (answers.includes('math')) {
    recommendations.push(products.find(p => p.id === 'numbers-busy-book')!);
    recommendations.push(products.find(p => p.id === 'shapes-busy-book')!);
  }
  
  if (recommendations.length === 0) {
    return [products[0], products[1], products[5]];
  }
  
  // Deduplicate
  const unique = [...new Map(recommendations.map(p => [p.id, p])).values()];
  return unique.slice(0, 3);
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations(answers) : [];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm font-body text-text-secondary mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all font-body text-text-primary"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-4 flex items-center gap-2 text-text-secondary hover:text-primary font-body text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-text-primary">
                Your Perfect Match!
              </h2>
              <p className="mt-2 text-text-secondary font-body">
                Based on your answers, we recommend these books:
              </p>
            </div>

            <div className="space-y-4">
              {recommendations.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.slug}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {product.slug.includes('alphabet') ? '🔤' :
                     product.slug.includes('number') ? '🔢' :
                     product.slug.includes('color') ? '🎨' :
                     product.slug.includes('shape') ? '🔷' :
                     product.slug.includes('fruit') ? '🍎' : '🦁'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-text-primary">{product.name}</h3>
                    <p className="text-sm text-text-secondary font-body">{product.shortDescription}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center space-y-4">
              <Link
                href="/bundles/complete-collection"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all"
              >
                Get All 6 Books — Save 28%
              </Link>
              <br />
              <button
                onClick={restart}
                className="text-text-secondary hover:text-primary font-body text-sm"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
