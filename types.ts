export interface Artifact {
  id: string;
  title: string;
  description: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  imageUrl: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  audioDuration: number; // in seconds
  artifacts: Artifact[];
}

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  volume: number;
}