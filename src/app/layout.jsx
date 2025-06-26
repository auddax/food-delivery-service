export const metadata = {
  title: 'Food Delivery Service',
  description: 'Food delivery app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
