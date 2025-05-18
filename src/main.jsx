import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <section key={id}>
        <h2>{name}</h2>
        <h3>Меню</h3>
        <ul>
          {menu.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </section>
    ))}
  </>
);
