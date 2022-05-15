import { useState } from "react";
import CategoryModal from "../CategoryModal";
import ServiceModal from "../ServiceModal";
import {
    Container,
    Category,
    Services,
    Service,
    NamePrice,
    Description,
    ButtonContainer,
    AdminCategory,
    AdminService,
} from "./style";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

export default function AdminSection({ categoriesArray, renderPage }) {
    const [serviceData, setServiceData] = useState();

    const [categoryTitle, setCategoryTitle] = useState();
    const [categoryModalType, setCategoryModalType] = useState("");
    const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

    const [serviceModalType, setServiceModalType] = useState("");
    const [serviceModalIsOpen, setServiceModalIsOpen] = useState(false);

    function editCategory(title) {
        setCategoryModalIsOpen(true);
        setCategoryTitle(title);
        document.body.style.overflow = "hidden";
    }

    function editService(categoryTitle, serviceData) {
        setServiceModalIsOpen(true);
        setCategoryTitle(categoryTitle);
        setServiceData(serviceData);
        document.body.style.overflow = "hidden";
    }

    function formatPrice(price) {
        const newPrice = price / 100;
        return newPrice.toFixed(2).replace(".", ",");
    }

    return (
        <>
            <Container>
                <button
                    className="new-category-button"
                    onClick={() => {
                        setCategoryModalType("create");
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
                                            setCategoryModalType("edit");
                                            editCategory(category?.title);
                                        }}
                                        className="cursor-pointer"
                                    />
                                    <MdOutlineAddCircle
                                        onClick={() => {
                                            setServiceModalType("create");
                                            editService(category?.title, "");
                                        }}
                                        className="cursor-pointer"
                                    />
                                    <FaTrashAlt
                                        onClick={() => {
                                            setCategoryModalType("delete");
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
                                                <AiFillEdit
                                                    onClick={() => {
                                                        setServiceModalType(
                                                            "edit"
                                                        );
                                                        editService(
                                                            category?.title,
                                                            service
                                                        );
                                                    }}
                                                    className="edit-service"
                                                />
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setServiceModalType(
                                                            "delete"
                                                        );
                                                        editService(
                                                            category?.title,
                                                            service
                                                        );
                                                    }}
                                                    className="delete-service"
                                                />
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

                                            <ButtonContainer>
                                                <p className="duration">
                                                    {service?.duration}
                                                </p>
                                                <button>Reservar</button>
                                            </ButtonContainer>
                                        </Service>
                                    );
                                })}
                            </Services>
                        </Category>
                    );
                })}
            </Container>

            <CategoryModal
                categoryModalIsOpen={categoryModalIsOpen}
                setCategoryModalIsOpen={setCategoryModalIsOpen}
                categoryTitle={categoryTitle}
                type={categoryModalType}
                renderPage={renderPage}
            />

            <ServiceModal
                serviceModalIsOpen={serviceModalIsOpen}
                setServiceModalIsOpen={setServiceModalIsOpen}
                categoryTitle={categoryTitle}
                serviceData={serviceData}
                type={serviceModalType}
                renderPage={renderPage}
            />
        </>
    );
}
