import Contact from './components/Contact';
import catImage1 from './images/cat.jpg';
import catImage2 from './images/cat2.jpg';
import catImage3 from './images/cat3.jpg';
import catImage4 from './images/cat4.jpg';

export default function App(){
  return(
    <div className="contacts">
      <Contact
        img={catImage1}
        name="Mr. Whinkerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      ></Contact>
      <Contact
        img={catImage2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      ></Contact>
      <Contact
        img={catImage3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      ></Contact>
      <Contact
        img={catImage4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumkin@scrimba.com"
      ></Contact>
    </div>
  );
}