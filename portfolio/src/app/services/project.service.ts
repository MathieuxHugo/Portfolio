import { Injectable } from '@angular/core';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Map<string, Project> = new Map<string, Project>([
    ["Snake", {
      title: 'Snake',
      description: 'This is a game coded in react where the player can play the famous snake game and try to win the game.',
      technologies: ['React', 'Javascript', 'CSS', 'Docker'],
      imageUrl: 'assets/logo_hover.jpg',
      link: 'http://example.com/logo_hover'
    }],
    ["Chess_game", {
      title: 'Chess Game',
      description: 'This is a game of chess developped in Java using Swing, it allow the player to play a game against another human playing on the same device or against an AI. The player can save his game to go back to it another day.',
      technologies: ['Java', 'Swing', 'Maven', 'Docker'],
      imageUrl: 'assets/logo_hover.jpg',
      link: 'http://example.com/logo_hover'
    }],
    ["Chess_detection", {
      title: 'Chess Detection',
      description: 'Chess Detection is a website that extract the position of a picture of a chess board in order to analyse it with other websites like lichess or chess.com.',
      technologies: ['Python', 'opencv', 'Tensorflow', 'Yolo', 'Docker', 'Angular', 'Javascript', 'CSS', 'HTML'],
      imageUrl: 'assets/icons/chess-detection.jpeg',
      link: 'http://example.com/logo_hover'
    }]

  ]);
  constructor() { }

  getProjectNames(): string[]{
    return Array.from(this.projects.keys());
  }

  getProjectByName(name:string): Project | undefined{
    return this.projects.get(name);
  }

}
