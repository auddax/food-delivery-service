import { Title } from 'src/components/Title/Title';

import styles from './HomePage.module.scss';

export const HomePage = () => (
  <div className={styles.homePage}>
    <Title
      level={3}
      value='Welcome to a world of culinary delights where your favorite dishes are
      just a click away!'
      className={styles.homePageTitle}
    />
    <p>
      We’ve curated an exquisite collection of dishes from the best restaurants
      in town, bringing gourmet experiences directly to your doorstep.
    </p>
    <Title level={4} value='Why Choose Us:' className={styles.homePageTitle} />
    <ul>
      <li>Lightning Fast Delivery – Enjoy your meal in just 30-40 minutes</li>
      <li>Extensive Menu – Over 1000 dishes to satisfy every craving</li>
      <li>Quality Assurance – Handpicked from trusted restaurants</li>
      <li>User-Friendly App – Ordering has never been easier</li>
      <li>Daily Specials – New deals every day to excite your taste buds</li>
    </ul>
    <Title
      level={4}
      value='Explore Our Delicious Categories:'
      className={styles.homePageTitle}
    />
    <ul>
      <li>European Cuisine – Classic dishes with a modern twist</li>
      <li>Asian Delights – Authentic flavors from across Asia</li>
      <li>Vegetarian Delights – Fresh and flavorful plant-based options</li>
      <li>Sweet Treats – Decadent desserts and refreshing beverages</li>
      <li>Party Platters – Perfect for gatherings and celebrations</li>
    </ul>
    <div className={styles.homePageFeatures}>
      <p>📞 24/7 Support – We’re here whenever you need us</p>
      <p>🚘 Free Delivery – Starting from $9.99</p>
      <p>🎁 Rewards Program – Earn points with every order</p>
    </div>
    <Title level={4} value='Bon Appétit!' className={styles.homePageTitle} />
  </div>
);
