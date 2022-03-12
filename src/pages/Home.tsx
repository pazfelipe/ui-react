import DefaultLayout from 'layouts/Default/Default';

const PageHome = () => {
  return (
    <DefaultLayout>
      <div>
        Home Page
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam similique nulla quam nesciunt ipsa dolores. Reprehenderit blanditiis quia, consectetur omnis, tenetur dignissimos dolore debitis sit veniam consequatur numquam quos! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, reprehenderit error nam sit amet vero quidem dolore earum iure necessitatibus enim doloribus corrupti nesciunt atque in obcaecati illum magni officiis.
        </p>
        {
          [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 ]
            .map(item =>
              <h1 key={ item }>
                { item }
              </h1>
            )
        }
      </div>
    </DefaultLayout>
  );
};

export default PageHome;