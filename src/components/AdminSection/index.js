import { useState } from "react";
import ReadMoreModal from "../ReadMoreModal";
import CategoryModal from "../CategoryModal";
import {
    Container,
    Category,
    Services,
    Service,
    NamePrice,
    Description,
    ButtonContainer,
    ReadMore,
    AdminCategory,
    AdminService,
} from "./style";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

export default function ServicesSection({ categoriesArray, renderPage }) {
    const [readMoreIsOpen, setReadMoreIsOpen] = useState(false);
    const [serviceData, setServiceData] = useState();

    const [categoryTitle, setCategoryTitle] = useState();
    const [modalType, setModalType] = useState("");
    const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

    function editCategory(title) {
        setCategoryModalIsOpen(true);
        setCategoryTitle(title);
        document.body.style.overflow = "hidden";
    }

    function readMore(service) {
        setReadMoreIsOpen(true);
        setServiceData(service);
        document.body.style.overflow = "hidden";
    }

    function handleReservation(service) {
        console.log(service);
    }

    function formatPrice(price) {
        const newPrice = price / 100;
        return newPrice.toFixed(2).replace(".", ",");
    }

    return (
        <>
            <Container>
                <button
                    onClick={() => {
                        setModalType("create");
                        editCategory("");
                    }}
                >
                    Criar nova categoria
                </button>
                {categoriesArray?.map((category) => {
                    return (
                        <Category key={category?._id}>
                            <AdminCategory>
                                <p className="category-title">
                                    {category?.title}
                                </p>
                                <div className="admin-category-icons">
                                    <AiFillEdit
                                        onClick={() => {
                                            setModalType("edit");
                                            editCategory(category?.title);
                                        }}
                                        className="cursor-pointer"
                                    />
                                    <MdOutlineAddCircle className="cursor-pointer" />
                                    <FaTrashAlt
                                        onClick={() => {
                                            setModalType("delete");
                                            editCategory(category?.title);
                                        }}
                                        className="cursor-pointer"
                                    />
                                </div>
                            </AdminCategory>

                            <Services>
                                {category?.services?.map((service) => {
                                    return (
                                        <Service key={service?._id}>
                                            <AdminService>
                                                <AiFillEdit className="edit-service" />
                                                <FaTrashAlt className="delete-service" />
                                            </AdminService>

                                            <NamePrice>
                                                <p className="name">
                                                    {service?.name}
                                                </p>
                                                <p className="price">{`R$ ${formatPrice(
                                                    service?.price
                                                )}`}</p>
                                            </NamePrice>
                                            <Description>
                                                {service?.description}
                                            </Description>
                                            {service?.description !== "" && (
                                                <ReadMore
                                                    onClick={() =>
                                                        readMore(service)
                                                    }
                                                >
                                                    Ler mais...
                                                </ReadMore>
                                            )}
                                            <ButtonContainer>
                                                <p className="duration">
                                                    {service?.duration}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        handleReservation(
                                                            service
                                                        )
                                                    }
                                                >
                                                    Reservar
                                                </button>
                                            </ButtonContainer>
                                        </Service>
                                    );
                                })}
                            </Services>
                        </Category>
                    );
                })}
            </Container>

            <ReadMoreModal
                modalIsOpen={readMoreIsOpen}
                setModalIsOpen={setReadMoreIsOpen}
                serviceData={serviceData}
                formatPrice={formatPrice}
            />

            <CategoryModal
                categoryModalIsOpen={categoryModalIsOpen}
                setCategoryModalIsOpen={setCategoryModalIsOpen}
                categoryTitle={categoryTitle}
                type={modalType}
                renderPage={renderPage}
            />
        </>
    );
}
