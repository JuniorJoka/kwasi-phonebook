import { ChangeEvent, useEffect, useState } from "react";

import { Modal } from "../components/AddContactModal";
import { ContactList } from "../components/ContactList";
import { Detail } from "../components/Detail";
import { DetailCard } from "../components/DetailCard";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Portal } from "../components/Portal";
import { Recents } from "../components/Recents";
import { Search } from "../components/Search";
import { SectionCard } from "../components/SectionCard";

const App = () => {
  const [onMobile, setOnMobile] = useState<boolean>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDetail = () => {
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  const mobileConfig = () => {
    setOnMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    mobileConfig();
    window.addEventListener("resize", mobileConfig);
    return () => window.removeEventListener("resize", mobileConfig);
  });

  return (
    <Main>
      <ContactList>
        <Header handler={openModal} />
        <Search handler={searchHandler} term={searchTerm} resetHandler={() => setSearchTerm("")} />
        <Recents />
        <SectionCard searchTerm={searchTerm} modalHandler={openModal} detailHandler={openDetail} />
      </ContactList>
      {onMobile ? (
        <Portal selector="#detail">
          <DetailCard onMobile={true} active={isDetailOpen} modalHandler={openModal} detailHandler={closeDetail} />
        </Portal>
      ) : (
        <Detail>
          <DetailCard onMobile={false} active={true} modalHandler={openModal} />
        </Detail>
      )}
      <Portal selector="#add">
        <Modal active={isModalOpen} modalHandler={closeModal} />
      </Portal>
    </Main>
  );
};
export default App;
