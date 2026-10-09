import { ComponentType } from 'react';

interface ComexSpotProps {
  title: string;
  data: Array<{
    label: string;
    value: string | number;
    change?: string;
  }>;
  titleStyle?: string;
}

declare const ComexSpot: ComponentType<ComexSpotProps>;
export default ComexSpot;
