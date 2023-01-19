import EmojiPicker, { Emoji } from "emoji-picker-react";
import { useState } from "react";
import { Modal } from "@components/Modal";
import * as S from "./CategoryModal.styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useForm } from "react-hook-form";
import { api } from "src/utils/api";

type CategoryModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

type CategoryFormData = {
  name: string;
  description: string;
};

export const CategoryModal = ({ isOpen, onDismiss }: CategoryModalProps) => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("1f423");
  const { register, handleSubmit } = useForm<CategoryFormData>();
  const apiContext = api.useContext();

  const createCategory = api.categories.create.useMutation({
    async onSettled() {
      try {
        await apiContext.categories.getAll.invalidate();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleToggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const handleCreateCategory = async (data: CategoryFormData) => {
    try {
      await createCategory.mutateAsync({
        ...data,
        icon: selectedEmoji,
      });
      onDismiss();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal title="Nova categoria" isOpen={isOpen} onDismiss={onDismiss}>
      <S.IconContainer>
        <S.EmojiContainer>
          <Emoji unified={selectedEmoji} size={24} />
        </S.EmojiContainer>
        <Button
          size="small"
          color="blue"
          fullWidth
          onClick={handleToggleEmojiPicker}
        >
          Escolher icone
        </Button>
        {isEmojiPickerOpen && (
          <S.EmojiPickerContainer>
            <EmojiPicker
              width="100%"
              onEmojiClick={({ unified }) => setSelectedEmoji(unified)}
            />
          </S.EmojiPickerContainer>
        )}
      </S.IconContainer>
      <S.Form onSubmit={handleSubmit(handleCreateCategory)}>
        <Input label="Nome" {...register("name")} />
        <Input label="Descrição" {...register("description")} />
        <Button type="submit" color="blue" size="medium">
          Criar categoria
        </Button>
      </S.Form>
    </Modal>
  );
};
