interface TrainingPrice {
  label?: string;
  price: string;
  duration: string;
  notes?: string[];
}

interface Topic {
  topicName: string;
  options: (string | OptionWithSubOptions)[];
}

export interface OptionWithSubOptions {
  name: string;
  subOptions: string[];
}

export interface TrainingCourse {
  name: string;
  label?: string;
  topics?: Topic[];
  prices: TrainingPrice[];
}
