export interface Thesis {
    id: number;
    title: string;
    description: string;
    proposer: string;  // Student or Teacher ID
    acceptedBy?: string;  // ID of the student/teacher who accepted it
    status: 'open' | 'accepted' | 'completed';
  }
  