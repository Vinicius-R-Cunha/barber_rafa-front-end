import {
  Container,
  Buttons,
  Button,
  Category,
  AdminCategory,
  Title,
  AdminCategoryIcons,
  Services,
  Service,
  AdminService,
  NamePrice,
  Description,
  Duration,
} from "./style";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

export default function AdminSection({
  categoriesArray,
  setServiceData,
  setCategoryData,
  setCategoryModalType,
  setCategoryModalIsOpen,
  setServiceModalType,
  setServiceModalIsOpen,
  setBusinessHoursModalIsOpen,
}) {
  function handleCategoryAction(category, action) {
    setCategoryModalType(action);
    openCategoryModal(category);
  }

  function handleServiceAction(category, service, action) {
    setServiceModalType(action);
    openServiceModal(category, service);
  }

  function openCategoryModal(category) {
    setCategoryModalIsOpen(true);
    setCategoryData(category);
    document.body.style.overflow = "hidden";
  }

  function openServiceModal(category, service) {
    setServiceModalIsOpen(true);
    setCategoryData(category);
    setServiceData(service);
    document.body.style.overflow = "hidden";
  }

  function openBusinessHoursModal() {
    setBusinessHoursModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Container>
        <Buttons>
          <Button onClick={() => openBusinessHoursModal()}>
            Horário de funcionamento
          </Button>
          <Button onClick={() => handleCategoryAction("", "create")}>
            Criar nova categoria
          </Button>
        </Buttons>
        {categoriesArray?.map((category) => {
          return (
            <Category key={category?._id}>
              <AdminCategory>
                <Title>{category?.title}</Title>
                <AdminCategoryIcons>
                  <AiFillEdit
                    onClick={() => handleCategoryAction(category, "edit")}
                  />
                  <MdOutlineAddCircle
                    onClick={() => handleServiceAction(category, "", "create")}
                  />
                  <FaTrashAlt
                    onClick={() => handleCategoryAction(category, "delete")}
                  />
                </AdminCategoryIcons>
              </AdminCategory>

              <Services>
                {category?.services?.map((service) => {
                  return (
                    <Service key={service?._id}>
                      <AdminService>
                        <AiFillEdit
                          onClick={() =>
                            handleServiceAction(category, service, "edit")
                          }
                        />
                        <FaTrashAlt
                          onClick={() =>
                            handleServiceAction(category, service, "delete")
                          }
                        />
                      </AdminService>

                      <NamePrice>
                        <p>{service?.name}</p>
                        <p>{`R$ ${service?.price}`}</p>
                      </NamePrice>

                      <Description>{service?.description}</Description>
                      <Duration>{service?.duration}</Duration>
                    </Service>
                  );
                })}
              </Services>
            </Category>
          );
        })}
      </Container>
    </>
  );
}
