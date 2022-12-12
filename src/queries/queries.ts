import { DataSource, createConnection } from "typeorm";
import { ProductDetails } from "../entities/ProductDetails";
import { faker } from '@faker-js/faker';
createConnection().then(async (connection) => {
  const productRep = connection.getRepository(ProductDetails);
  for (let i = 0; i < 50; i++) {
    // console.log(faker);
    await productRep.save({
      title: faker.lorem.words(2),
      description: faker.lorem.words(10),
      image: faker.image.imageUrl(),
      price: faker.datatype.number(100),
    });
    // console.log(faker);
  }
  process.exit();
});
