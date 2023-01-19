import { type NextPage } from "next";
import { CategoriesList } from "@components/CategoriesList";
import { Header } from "@components/Header";

const Transactions: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <CategoriesList />
      </main>
    </>
  );
};

export default Transactions;
