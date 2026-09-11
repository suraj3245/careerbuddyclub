"use client";

import { useReducer } from "react";

export interface AdvisorState {
  courseId: string;
  courseTitle: string;
  currentStep: number;
  answers: {
    specialization: string | null;
    budgetRange: string | null;
    experience: string | null;
    learningMode: string | null;
  };
  direction: 'forward' | 'back';
}

export type AdvisorAction =
  | { type: 'SET_ANSWER'; field: keyof AdvisorState['answers']; value: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET'; courseId: string; courseTitle: string };

function advisorReducer(state: AdvisorState, action: AdvisorAction): AdvisorState {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.field]: action.value
        }
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 5),
        direction: 'forward'
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1),
        direction: 'back'
      };
    case 'RESET':
      return {
        courseId: action.courseId,
        courseTitle: action.courseTitle,
        currentStep: 1,
        answers: {
          specialization: null,
          budgetRange: null,
          experience: null,
          learningMode: null,
        },
        direction: 'forward'
      };
    default:
      return state;
  }
}

export function useAdvisorStore(courseId: string, courseTitle: string) {
  const [state, dispatch] = useReducer(advisorReducer, {
    courseId,
    courseTitle,
    currentStep: 1,
    answers: {
      specialization: null,
      budgetRange: null,
      experience: null,
      learningMode: null,
    },
    direction: 'forward'
  });

  return { state, dispatch };
}
