import {
  Box,
  Text,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Skeleton,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Spinner
} from "@chakra-ui/react";
import Exclamation from "../../public/img/icons/exclamationIcon";

export function LabelTextForm ({ text, ...props }) {
  return (
    <FormLabel
      color="#252A32"
      fontFamily="Roboto"
      fontSize="16px"
      fontWeight="500"
      lineHeight="24px"
      margin="0 0 8px 0"
      {...props}
    >{text}</FormLabel>
  )
}

export function TitleTextForm ({ children, ...props }) {
  return (
    <Text
      color="#252A32"
      fontFamily="ubuntu"
      letterSpacing="0.2px"
      fontSize="16px"
      fontWeight="400"
      lineHeight="16px"
      marginBottom="8px"
      {...props}
    >{children}</Text>
  )
}

export  function SkStack ({ isLoaded, children, ...props }) {
  return (
    <Skeleton
      height="40px"
      width="100%"
      borderRadius="12px"
      startColor="#F0F0F0"
      endColor="#F3F3F3"
      isLoaded={isLoaded}
      fadeDuration={2}
      {...props}
    >
      {children}
    </Skeleton>
  )
}

export function ExtraInfoTextForm ({children, ...props}) {
  return (
    <Text
      color="#7D7D7D"
      fontFamily="ubuntu"
      letterSpacing="0.3px"
      fontSize="12px"
      fontWeight="400"
      lineHeight="16px"
      {...props}
    >{children}</Text>
  )
}

export function ModalGeneral ({
  children,
  isOpen,
  onClose,
  isCentered = true,
  propsModal,
  propsModalContent,
  classNameBody
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={isCentered}
      margin="24px !important"
      {...propsModal}
    >
      <ModalOverlay/>
      <ModalContent
        margin="24px"
        minWidth={{base: "auto", lg: "536px"}}
        boxSizing="content-box"
        padding="32px"
        borderRadius="16px"
        {...propsModalContent}
      >
        <ModalHeader padding="0">
          {children[0]}
        </ModalHeader>

        <ModalBody padding="0" className={classNameBody}>
          {children[1]}
        </ModalBody>

        <ModalFooter padding="0" width={{base: "100%", lg: "auto"}}>
          {children[2]}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export function InputForm({
  value,
  onChange,
  placeholder,
  icon = null,
  inputGroupStyle,
  inputElementStyle,
  fill,
  ...props
}) {
  return (
    <InputGroup
      width="100%"
      alignSelf="center"
      justifyContent="center"
      fill={fill}
      {...inputGroupStyle}
    >
      {icon &&
        <InputLeftElement
          width="24px"
          height="24px"
          margin="8px 8px 8px 16px"
          children={icon}
          {...inputElementStyle}
        />
      }

      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        variant="outline"
        border="2px solid transparent !important"
        color="#464A51"
        _hover={{
          border:"2px solid transparent !important",
          backgroundColor:"#DEDFE0",
        }}
        _focus={{
          border:"2px solid #0068C5 !important",
          backgroundColor: "#FFF",
        }}
        _invalid={{backgroundColor:"#F6E3E3"}}
        paddingLeft={icon !== null && "52px !important"}
        backgroundColor="#EEEEEE"
        height="40px"
        fontSize="14px"
        lineHeight="20px"
        width="100%"
        fontFamily="Roboto"
        fontWeight="400"
        borderRadius="8px"
        _placeholder={{color: "#464A51", opacity: 1}}
        {...props}
      />
    </InputGroup>
  )
}

export function ErrorMessage({ children }) {
  return (
    <FormErrorMessage
      fontFamily="Roboto"
      fontSize="14px"
      fontWeight="400"
      lineHeight="20px"
      color="#BF3434"
      marginTop="12px"
      display="flex"
      flexDirection="row"
      gap="8px"
      alignItems="flex-start"
    >
      <Exclamation
        width="18px"
        height="18px"
        fill="#BF3434"
      />{children}
    </FormErrorMessage>
  )
}

export function Button ({ children, onClick, isLoading, ...props }) {
  return (
    <Box
      as="button"
      onClick={() => onClick()}
      display="flex"
      alignItems="center"
      height="44px"
      width="fit-content"
      borderRadius="8px"
      backgroundColor="#2B8C4D"
      padding="8px 16px"
      cursor="pointer"
      color="#FFF"
      fill="#FFF"
      fontFamily="Roboto"
      fontWeight="500"
      fontSize="14px"
      lineHeight="20px"
      letterSpacing="0.1px"
      gap="8px"
      _hover={{
        backgroundColor:"#22703E"
      }}
      {...props}
    >
      {isLoading ? 
        <Spinner width="16px" height="16px"/>
        :
        children
      }
    </Box>
  )
}