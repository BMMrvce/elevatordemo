import React from 'react';

export interface NavItem {
  id: number;
  label: string;
  icon?: string;
  component: React.ReactNode;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  role: MessageRole;
  content: string;
}

export interface ElevatorState {
  currentFloor: number;
  targetFloor: number;
  isMoving: boolean;
  doorsOpen: boolean;
}