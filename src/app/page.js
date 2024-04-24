import Accordian from '../components/accordian/page';
import RandomColor from '../components/random-color/page';
import ImageSlider from '../components/image-slider/page';
import GitHubProfileFinder from '../components/github-profile-finder/page';

export default function Home() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* Random Color component */}
      <RandomColor />

      {/* Image Slider component */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={'1'}
      />

      {/* GitHub Profile Finder component */}
      <GitHubProfileFinder />
    </div>
  );
}
