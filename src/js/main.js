import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsiderSlider,
  useTestimonialsSlider,
} from './components/home/slider';

useTheme();
useBurger();
useInsiderSlider();
useTestimonialsSlider();
