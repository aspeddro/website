import {
  Box,
  VStack,
  Stack,
  Text,
  Divider,
  Collapse
} from "@chakra-ui/react";
import Head from "next/head";
import FuzzySearch from 'fuzzy-search';
import { useEffect, useState } from "react";
import { useCheckMobile } from "../hooks/useCheckMobile.hook";
import { MainPageTemplate } from "../components/templates/main";
import { QuestionFAQ } from "../context/faq";
import ControlledInput from "../components/atoms/ControlledInput";
import Display from "../components/atoms/Display";
import BodyText from "../components/atoms/BodyText";
import CrossIcon from "../public/img/icons/crossIcon";
import SearchIcon from "../public/img/icons/searchIcon";

const QuestionsBox = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false)

  const OpenCloseQuestion = () => {
    setIsActive(!isActive)
    window.Prism.highlightAll()
  }

  return (
    <Stack
      spacing={0} 
    >
      <Box
        display="flex"
        cursor="pointer"
        marginBottom="24px"
        justifyContent="space-between"
        onClick={() => OpenCloseQuestion()}
      >
        <Text
          fontFamily="ubuntu"
          fontSize="20px"
          fontWeight="400"
          lineHeight="22px"
          letterSpacing="0.2px"
          color="#252A32"
        >
          {question}
        </Text>
        <CrossIcon
          color="#252A32"
          rotation={!isActive && "rotate(45deg)"}
          widthIcon="20px"
          heightIcon="20px"
        />
      </Box>
      <Collapse in={isActive} animateOpacity>
        <BodyText
          height={isActive ? "100%" : "0"}
          marginBottom={isActive && "32px !important"}
          overflow="hidden"
          transition="all 1s ease"
        >
          {answer()}
        </BodyText>
      </Collapse>
      <Divider borderColor="#DEDFE0"/>
    </Stack>
  )
}

export default function FAQ() {
  const isMobile = useCheckMobile();
  const [isMobileMod, setIsMobileMod] = useState(false)
  
  useEffect(() => {
    setIsMobileMod(isMobile)
  }, [isMobile])
  
  const [allQuestions, setAllQuestions] = useState([])
  const [questions, setQuestions] = useState([])
  const [categorySelected, setCategorySelected] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    setAllQuestions(QuestionFAQ)
    setQuestions(QuestionFAQ)
  },[])

  useEffect(() => {
    if(categorySelected) return filterByCategory(categorySelected)
  },[categorySelected])

  const searcher = new FuzzySearch(
    categorySelected ? questions : allQuestions, ["question", "keywords"], {caseSensitive: true}
  )

  const filterQuestions = () => {
    const result = searcher.search(searchFilter)
    console.log(result)
    setQuestions(result)
    setSearchFilter("")
  }

  const filterByCategory = (category) => {
    const filtedCategory = allQuestions.filter((elm) => {
      const indexCategory = elm.categories.findIndex((res) => res === category)
      if(indexCategory > -1) return elm.categories[indexCategory]
    })
    setQuestions(filtedCategory)
  }

  const CategoryText = ({ category }) => {

    function handlerClick(elm) {
      if(elm === categorySelected) {
        setCategorySelected("")
        setQuestions(allQuestions)
      } else {
        setCategorySelected(elm)
      }
    }

    return (
      <Text
        fontSize="16px"
        color={categorySelected === category ? "#2B8C4D" :"#6F6F6F"}
        fontFamily="ubuntu"
        fontWeight="500"
        width="max-content"
        cursor="pointer"
        onClick={() => handlerClick(category)}
      >
        {category}
      </Text>
    )
  }

  return (
    <MainPageTemplate paddingX="24px">
      <Head>
        <title>FAQ – Base dos Dados</title>
        <meta
          property="og:title"
          content="FAQ – Base dos Dados"
          key="ogtitle"
        />
      </Head>

      <VStack
        width="100%"
        maxWidth="1264px"
        margin="auto"
        paddingTop={isMobileMod && "75px"}
        spacing={0}
      >
        <Display
          paddingBottom={isMobileMod ? "56px" : "66px" }
          color="#2B8C4D"
        >
          Perguntas Frequentes
        </Display>

        <ControlledInput
          value={searchFilter}
          onChange={setSearchFilter}
          onEnterPress={filterQuestions}
          paddingBottom={isMobileMod ? "56px" : "126px" }
          maxWidth="600px"
          placeholder="Pesquise"
          inputStyle={{
            padding: "12px 32px 12px 16px",
            height: "48px",
            borderRadius: "18px",
            backgroundColor: "#ffffff",
            fontSize: "16px",
            border: "0px",
            boxShadow: "0 1px 3px 0.5px rgba(100, 96, 103, 0.16) !important",
          }}
          inputElementStyle={{
            height: "50px"
          }}
          rightIcon={
            (searchFilter ?
              <SearchIcon
                widthIcon="20px"
                heightIcon="20px"
                cursor="pointer"
                fill="#D0D0D0"
                onClick={filterQuestions}
              />
              :
              (questions.length < allQuestions.length  ?
                <CrossIcon
                  widthIcon="22px"
                  heightIcon="22px"
                  cursor="pointer"
                  fill="#D0D0D0"
                  onClick={() => setQuestions(allQuestions)}
                />
                :
                <></>
              )
            )
          }
        />

        <Stack
          width="100%"
          position="relative"
          gridGap="96px"
          spacing={0}
          flexDirection={isMobileMod ? "column" :"row"} 
          paddingBottom="32px"
        >
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            gridGap="16px"
            position={isMobileMod ? "relative" : "sticky"}
            top={isMobileMod? "0" : "120px"}
          >
            <CategoryText category="Dados"/>
            <CategoryText category="BigQuery"/>
            <CategoryText category="Institucional"/>
          </Box>

          <Stack
            width="100%"
            spacing={8}
          >
            {questions.length === 0 ?
              <BodyText color="#7D7D7D">
                Infelizmente, não encontramos nenhuma pergunta relacionada à sua busca.
              </BodyText>
            :
              questions.map((elm) => 
                <QuestionsBox
                  question={elm.question}
                  answer={elm.answer}
                />
            )}
            <Text marginTop="60px !important" color="#252A32" fontFamily="ubuntu" fontSize="16px" fontWeight="500" lineHeight="16px" letterSpacing="0">
              Não encontrou sua pergunta? <a style={{color:"#42B0FF"}} href="/contato">Entre em contato</a> com nossa equipe.
            </Text>
          </Stack>
        </Stack>

      </VStack>
      <script key="sql" src="/vendor/prism.js"></script>
    </MainPageTemplate>
  )
}