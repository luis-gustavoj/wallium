import { useState } from "react";
import { Edit2, Plus, Trash } from "react-feather";
import { Button } from "@components/Button";
import * as S from "./CategoriesList.styles";
import { CategoryModal } from "@components/CategoryModal";
import { api } from "src/utils/api";
import { Emoji } from "emoji-picker-react";

export const CategoriesList = () => {
  const { data } = api.categories.getAll.useQuery();
  const apiContext = api.useContext();
  const deleteCategory = api.categories.delete.useMutation({
    async onSettled() {
      try {
        await apiContext.categories.getAll.invalidate();
      } catch (error) {
        console.error(error);
      }
    },
  });
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  const handleToggleCategoriesModal = () => {
    setIsCategoriesModalOpen(!isCategoriesModalOpen);
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.InnerContainer>
      <S.HeadingContainer>
        <S.Heading>Categorias</S.Heading>
        <Button
          iconLeft={<Plus />}
          size="small"
          color="blue"
          onClick={handleToggleCategoriesModal}
        >
          Criar categoria
        </Button>
      </S.HeadingContainer>
      <S.CategoriesContainer>
        {data?.map((category) => (
          <S.CategoryItem key={category.id}>
            <S.IconContainer>
              <Emoji size={20} unified={category.icon} />
            </S.IconContainer>
            <S.InfoContainer>
              <p>{category.name}</p>
              <p>{category.description}</p>
            </S.InfoContainer>
            <S.IconButton>
              <Edit2 />
            </S.IconButton>
            <S.IconButton
              type="button"
              onClick={() => handleDeleteCategory(category.id)}
            >
              <Trash />
            </S.IconButton>
          </S.CategoryItem>
        ))}
      </S.CategoriesContainer>
      <CategoryModal
        isOpen={isCategoriesModalOpen}
        onDismiss={handleToggleCategoriesModal}
      />
    </S.InnerContainer>
  );
};
