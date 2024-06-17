import {
  VStack,
  HStack,
  Stack,
  Box,
  Text,
  Grid,
  GridItem,
  Tooltip,
  Skeleton,
  SkeletonText,
  Divider
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useCheckMobile } from "../../hooks/useCheckMobile.hook";
import Link from "../atoms/Link";
import SectionText from "../atoms/SectionText";
import { SimpleTable } from "../atoms/SimpleTable";
import ReadMore from "../atoms/ReadMore";
import LoadingSpin from "../atoms/Loading";
import Subtitle from "../atoms/Subtitle";
import { formatBytes } from "../../utils";
import { TemporalCoverageBar } from "../molecules/TemporalCoverageDisplay";
import ColumnDatasets from "../molecules/ColumnDatasets";
import DataInformationQuery from "../molecules/DataInformationQuery";
import FourOFour from "../templates/404";

import StarIcon from "../../public/img/icons/starIcon";
import FrequencyIcon from "../../public/img/icons/frequencyIcon";
import PartitionIcon from "../../public/img/icons/partitionIcon";
import UserIcon from "../../public/img/icons/userIcon";
import VersionIcon from "../../public/img/icons/versionIcon";
import EmailIcon from "../../public/img/icons/emailIcon";
import GithubIcon from "../../public/img/icons/githubIcon";
import WebIcon from "../../public/img/icons/webIcon";
import TwitterIcon from "../../public/img/icons/twitterIcon";
import FileIcon from "../../public/img/icons/fileIcon";
import InfoIcon from "../../public/img/icons/infoIcon";
import DownloadIcon from "../../public/img/icons/downloadIcon";

export default function BdmTablePage({ id }) {
  const [isLoading, setIsLoading] = useState(true)
  const [resource, setResource] = useState({})
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/tables/getBdmTable?p=${id}`, { method: "GET" })
        const result = await response.json()

        if (result.success) {
          setResource(result.resource)
          setIsError(false)
        } else {
          console.error(result.error)
          setIsError(true)
        }
      } catch (error) {
        console.error("Fetch error: ", error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const TooltipText = ({ text, info, ...props }) => {
    return (
      <Box>
        <Text
          display="flex"
          flexDirection="row"
          alignItems="center"
          gridGap="8px"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="18px"
          lineHeight="20px"
          color="#252A32"
        >
          {text}
          <Tooltip
            label={info}
            hasArrow
            padding="16px"
            backgroundColor="#252A32"
            boxSizing="border-box"
            borderRadius="8px"
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            textAlign="center"
            color="#FFFFFF"
            placement="top"
            maxWidth="300px"
            {...props}
          >
            <InfoIcon
              alt="tip"
              cursor="pointer"
              fill="#878A8E"
              width="16px"
              height="16px"
            />
          </Tooltip>
        </Text>
      </Box>
    )
  }

  const keyIcons = (ref) => {
    let href = ""
    let alt = ""

    if(ref.github_user) {
      const github = ref.github_user.replace(/(https:)\/\/(github.com)\//gim, "")
      href = `https://github.com/${github}` 
      alt = "github basedosdados"
    }
    if(ref.twitter_user) {
      const twitter = ref.twitter_user.replace(/(https:)\/\/(twitter.com)\//gim, "")
      href = `https://twitter.com/${twitter}`
      alt = "twitter basedosdados"
    }
    if(ref.email) {
      href = `mailto:${ref.email}`
      alt= "email do contribuidor"
    }
    if(ref.website) {
      const website = ref.website.replace(/(https?:)\/\//gim, "")
      href = `https://${website}`
      alt = "website pessoal"
    }

    return {
      alt: alt,
      cursor: "pointer",
      width:"20px",
      height:"20px",
      fill: "#0068C5",
      onClick: () => {window.open(href)}
    }
  }

  const PublishedOrDataCleanedBy = ({ resource }) => {
    return (
      <HStack spacing="4px">
        {resource?.firstName && resource?.lastName ?
          <Text
            marginRight="4px !important"
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            {`${resource.firstName} ${resource.lastName}`}
          </Text>
          :
          <Text
            marginRight="4px !important"
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            Não informado
          </Text>
        }
        {resource?.email && <EmailIcon {...keyIcons({email : resource.email})}/>}
        {resource?.github && <GithubIcon {...keyIcons({github_user : resource.github})}/>}
        {resource?.website && <WebIcon {...keyIcons({website : resource.website})}/>}
        {resource?.twitter && <TwitterIcon {...keyIcons({twitter_user : resource.twitter_user})}/>}
      </HStack>
    )
  }

  const Empty = () => {
    return (
      <p style={{margin:"0", fontWeight:"500", color:"#C4C4C4"}}>
        Não informado
      </p>
    )
  }

  const ObservationLevel = () => {
    const notFound = <SectionText marginRight="4px !important">Nenhum nível da observação fornecido.</SectionText>
    if(resource?.observationLevels === undefined || Object.keys(resource?.observationLevels).length === 0) return notFound

    let array = []
    const keys = Object.keys(resource?.observationLevels)

    keys.forEach((elm) => {
      const value = resource?.observationLevels[elm]

      const newValue = [value?.entity?.name || <Empty/>, value?.columns[0]?.name || <Empty/>]
      array.push(newValue)
    })

    return (
      <SimpleTable
        headers={["Entidade","Colunas Correspondentes"]}
        values={array}
        valuesTable={{_first:{textTransform: "capitalize"}}}
      />
    )
  }

  const StackSkeleton = ({ children, ...props }) => {
    return (
      <Skeleton
        startColor="#F0F0F0"
        endColor="#F3F3F3"
        borderRadius="6px"
        height="36px"
        width="100%"
        isLoaded={!isLoading}
        {...props}
      >
        {children}
      </Skeleton>
    )
  }

  if(isError) return <FourOFour/>

  return (
    <Stack
      flex={1}
      overflow="hidden"
      paddingLeft={{base: "0", lg: "24px"}}
      spacing={0}
    >
      <StackSkeleton
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="8px"
      >
        <Text
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="24px"
          lineHeight="36px"
          color="#252A32"
          width="fit-content"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {resource?.name}
        </Text>
        <Text
          display={resource?.uncompressedFileSize}
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="12px"
          lineHeight="18px"
          color="#71757A"
        >
          {`(${formatBytes(resource.uncompressedFileSize)})`}
        </Text>
      </StackSkeleton>

      <SkeletonText
        startColor="#F0F0F0"
        endColor="#F3F3F3"
        borderRadius="6px"
        width="100%"
        minHeight="60px"
        spacing="6px"
        skeletonHeight="16px"
        noOfLines={3}
        marginTop="8px !important"
        marginBottom="40px !important"
        isLoaded={!isLoading}
      >
        <ReadMore id="readLessTable">
          {resource?.description || "Não fornecido"}
        </ReadMore>
      </SkeletonText>

      <Stack spacing="12px" marginBottom="40px !important">
        <StackSkeleton width="160px" height="20px">
          <Text
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="18px"
            lineHeight="20px"
            color="#252A32"
          >
            Cobertura temporal
          </Text>
        </StackSkeleton>

        <StackSkeleton
          width="350px"
          height={!isLoading ? "fit-content" : "65px"}
        >
          <TemporalCoverageBar value={resource?.fullCoverage}/>
        </StackSkeleton>
      </Stack>

      <Stack spacing="12px" marginBottom="40px !important">
        <StackSkeleton width="160px" height="20px">
          <Text
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="18px"
            lineHeight="20px"
            color="#252A32"
          >
            Acesso oas dados
          </Text>
        </StackSkeleton>

        <Box
          border="1px solid #DEDFE0"
          borderRadius="16px"
        >
          {/* <DataInformationQuery resource={resource}/> */}

        </Box>
        {/* <ColumnDatasets tableId={resource?._id} /> */}
      </Stack>

      <Stack marginBottom="40px !important">
        <StackSkeleton width="300px" height="20px">
          <Text
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="18px"
            lineHeight="20px"
            color="#252A32"
          >
            Frequência de atualização dos dados
          </Text>
        </StackSkeleton>

        <SkeletonText
          startColor="#F0F0F0"
          endColor="#F3F3F3"
          borderRadius="6px"
          width="500px"
          spacing="11px"
          skeletonHeight="18px"
          noOfLines={3}
          marginTop="12px !important"
          isLoaded={!isLoading}
        >
          <Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            Não informado : Última vez que atualizamos na BD
          </Text>
          <Text
            marginTop="8px !important"
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            Não informado : Última vez que atualizaram na fonte original
          </Text>
          <Text
            marginTop="8px !important"
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            Não informado : Última vez que verificamos a fonte original
          </Text>
        </SkeletonText>
      </Stack>

      <Stack marginBottom="40px !important">
        <StackSkeleton width="205px" height="20px">
          <TooltipText
            text="Partições no BigQuery"
            info="As partições são divisões feitas em uma tabela para facilitar o gerenciamento e a consulta aos dados. Ao segmentar uma tabela grande em partições menores, a quantidade de bytes lidos é reduzida, o que ajuda a controlar os custos e melhora o desempenho da consulta."
          />
        </StackSkeleton>
        <StackSkeleton height="20px" width={resource?.partitions ? "100%" : "200px"} marginTop="12px !important" >
          <Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            {resource?.partitions ? resource.partitions :"Não informado"}
          </Text>
        </StackSkeleton>
      </Stack>

      <Stack marginBottom="40px !important">
        <StackSkeleton width="190px" height="20px">
          <TooltipText
            text="Nível da observação"
            info="indica qual a menor granularidade possível de análise com aquele dado. Por exemplo, uma tabela com nível da observação de estado permite que façamos uma análise no país (por ser mais amplo que estado), mas não uma análise por município (que já seria um recorte mais específico)."
          />
        </StackSkeleton>
        <SkeletonText
          startColor="#F0F0F0"
          endColor="#F3F3F3"
          borderRadius="6px"
          width="200px"
          spacing="6px"
          skeletonHeight="16px"
          noOfLines={2}
          marginTop="12px !important"
          isLoaded={!isLoading}
        >
          <Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            Não informado
          </Text>
          {/* <ObservationLevel/> */}
        </SkeletonText>       
      </Stack>

      <Stack marginBottom="40px !important">
        <StackSkeleton width="180px" height="20px">
          <TooltipText
            text="Arquivos auxiliares"
            info="Os arquivos dão mais contexto e ajudam a entender melhor os dados disponíveis. Podem incluir notas técnicas, descrições de coleta e amostragem, etc."
          />
        </StackSkeleton>
        <StackSkeleton
          width="178px"
          height="24px"
          marginTop="12px !important"
        >
          <Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            {resource?.auxiliaryFilesUrl ?
              <Text
                as="a"
                display="flex"
                flexDirection="row"
                gap="8px"
                alignItems="center"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                color="#0068C5"
                fill="#0068C5"
                _hover={{
                  fill: "#4F9ADC",
                  color: "#4F9ADC"
                }}
                href={resource.auxiliaryFilesUrl}
              >
                Download dos arquivos
                <DownloadIcon
                  width="24px"
                  height="24px"
                />
              </Text>
            :
              "Não informado"
            }
          </Text>  
        </StackSkeleton>
      </Stack>

      <Stack>
        <StackSkeleton width="155px" height="20px">
          <TooltipText
            text="Fontes originais"
            info="São links para páginas externas à plataforma com informações úteis sobre o conjunto de dados. Tentamos sempre fornecer o caminho mais próximo possível à fonte para baixar os dados originais."
          />
        </StackSkeleton>

        <StackSkeleton
          height="20px"
          width="132px"
          marginTop="12px !important"
        >
          <Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color="#464A51"
          >
            {resource?.rawDataUrl ? 
              <Text
                as="a"
                display="flex"
                flexDirection="row"
                gap="8px"
                alignItems="center"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                color="#0068C5"
                fill="#0068C5"
                _hover={{
                  fill: "#4F9ADC",
                  color: "#4F9ADC"
                }}
                href={resource.rawDataUrl}
              >
                Microdados originais
              </Text>
            :
              "Não informado"
            }
          </Text>
        </StackSkeleton> 
      </Stack>

      <Divider marginY="40px !important" borderColor="#DEDFE0"/>

      <StackSkeleton width="190px" height="20px" marginBottom="20px !important">
        <Text
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="18px"
          lineHeight="20px"
          color="#252A32"
        >
          Informações adicionais
        </Text>
      </StackSkeleton>

      <SkeletonText
        startColor="#F0F0F0"
        endColor="#F3F3F3"
        borderRadius="6px"
        width={resource?.publishedByInfo ? "100%" :"200px"}
        minHeight="40px"
        spacing="4px"
        skeletonHeight="16px"
        noOfLines={2}
        marginBottom="24px !important"
        isLoaded={!isLoading}
      >
        <Text
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="14px"
          lineHeight="20px"
          color="#252A32"
        >Publicação por</Text>
        <PublishedOrDataCleanedBy
          resource={resource?.publishedByInfo || "Não informado"}
        />
      </SkeletonText>

      <SkeletonText
        startColor="#F0F0F0"
        endColor="#F3F3F3"
        borderRadius="6px"
        width={resource?.dataCleanedByInfo ? "100%" : "200px"}
        minHeight="40px"
        spacing="4px"
        skeletonHeight="16px"
        noOfLines={2}
        marginBottom="24px !important"
        isLoaded={!isLoading}
      >
        <Text
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="14px"
          lineHeight="20px"
          color="#252A32"
        >Tratamento por</Text>
        <PublishedOrDataCleanedBy
          resource={resource?.dataCleanedByInfo || "Não informado"}
        />
      </SkeletonText>

      <SkeletonText
        startColor="#F0F0F0"
        endColor="#F3F3F3"
        borderRadius="6px"
        width={resource?.version ? "100%" : "80px"}
        minHeight="40px"
        spacing="4px"
        skeletonHeight="18px"
        noOfLines={2}
        marginBottom="24px !important"
        isLoaded={!isLoading}
      >
        <Text
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="14px"
          lineHeight="20px"
          color="#252A32"
        >Versão</Text>
        <Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="14px"
          lineHeight="20px"
          color="#464A51"
        >{resource?.version || "Não informado"}</Text>
      </SkeletonText>
    </Stack>
  )
}
