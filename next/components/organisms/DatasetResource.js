import {
  Stack,
  VStack,
  Center,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobileMod } from "../../hooks/useCheckMobile.hook";

import { SimpleButton } from "../atoms/SimpleButton";
import { FilterAccordion } from "../atoms/FilterAccordion";
import { LoadingSpin } from "../atoms/Loading";

import BdmTablePage from "./BdmTablePage";
import RawDataSourcesPage from "./RawDataSourcesPage";
import InformationRequestPage from "./InformationRequestPage";

import CrossIcon from "../../public/img/icons/crossIcon";

function AdminButtons() {

  return (
    <Stack paddingTop="16px" width="100%">
      <SimpleButton
        // isActive={isActive("create_bdm_table")}
        // onClick={() => setResource({ resource_type: "create_bdm_table" })}
        margin="0 0 16px !important"
        justifyContent="space-between"
        alignItems="center"
        paddingRight="15%"
      >
        Criar tabela tratada
        <CrossIcon
          alt=""
          width="18px"
          height="18px"
          fill="currentColor"
          marginLeft="4px"
          transform="rotate(45deg)"
        />
      </SimpleButton>
      <SimpleButton
        // isActive={isActive("create_external_link")}
        // onClick={() => setResource({ resource_type: "create_external_link" })}
        margin="0 0 16px !important"
        justifyContent="space-between"
        alignItems="center"
        paddingRight="15%"
      >
        Criar fonte original
        <CrossIcon
          alt=""
          width="18px"
          height="18px"
          fill="currentColor"
          marginLeft="4px"
          transform="rotate(45deg)"
        />
      </SimpleButton>
      <SimpleButton
        // isActive={isActive("create_information_request")}
        // onClick={() =>
        //   setResource({ resource_type: "create_information_request" })
        // }
        borderBottom="1px solid #DEDFE0"
        padding="0 15% 24px 0"
        margin="0 !important"
        justifyContent="space-between"
        alignItems="center"
      >
        Criar pedido LAI
        <CrossIcon
          alt=""
          width="18px"
          height="18px"
          fill="currentColor"
          marginLeft="4px"
          transform="rotate(45deg)"
        />
      </SimpleButton>
    </Stack>
  )
}

export default function DatasetResource({
  dataset
}) {
  const router = useRouter()
  const { query } = router
  const [tables, setTables] = useState([])
  const [rawDataSources, setRawDataSources] = useState([])
  const [informationRequests, setInformationRequests] = useState([])

  const pushQuery = (key, value) => {
    router.push({
      pathname: `/dataset/${query.dataset}`,
      query: { [key]: value }
    },
      undefined, { shallow: true }
    )
  }

  useEffect(() => {
    const dataset_tables = dataset?.tables?.edges.map((elm) => elm.node) || []
    const raw_data_sources = dataset?.rawDataSources?.edges.map((elm) => elm.node) || []
    const information_request = dataset?.informationRequests?.edges.map((elm) => elm.node) || []

    setTables(dataset_tables)
    setRawDataSources(raw_data_sources)
    setInformationRequests(information_request)

    const queryParams = new URLSearchParams(window.location.search)

    if(queryParams.toString().length === 0) {
      if(dataset_tables.length > 0) return pushQuery("table", dataset_tables[0]?.slug)
      if(raw_data_sources.length > 0) return pushQuery("raw_data_source", raw_data_sources[0]?._id)
      if(information_request.length > 0) return pushQuery("information_request", information_request[0]?.number)
    }
  },[dataset])

  function SwitchResource({route}) {
    if (route.hasOwnProperty("table"))
      return <BdmTablePage slug={route.table}/>
    if (route.hasOwnProperty("raw_data_source"))
      return <RawDataSourcesPage id={route.raw_data_source}/>
    if (route.hasOwnProperty("information_request"))
      return <InformationRequestPage id={route.information_request}/>
    return <LoadingSpin />
  }

  return (
    <Stack
      paddingTop="24px"
      direction={{ base: "column", lg: "row" }}
      spacing={4}
      width="100%"
    >
      <VStack
        minWidth={{ base: "100%", lg: "250px" }}
        maxWidth={{ base: "100%", lg: "250px" }}
        spacing={2}
        align="flex-start"
        justify="flex-start"
        borderRight={!isMobileMod() && "1px solid #DEDFE0"}
      >
        {/* <AdminButtons/> */}

        <FilterAccordion
          alwaysOpen={true}
          choices={tables}
          value={query.table}
          valueField="slug"
          displayField="name"
          fieldName="Tabelas tratadas"
          bdPlus={true}
          isHovering={false}
          onChange={(id) => {
            pushQuery("table", id)
          }}
        />

        <FilterAccordion
          alwaysOpen={true}
          choices={rawDataSources}
          value={query.raw_data_source}
          valueField="_id"
          displayField="name"
          fieldName="Fontes originais"
          isHovering={false}
          onChange={(id) => {
            pushQuery("raw_data_source", id)
          }}
        />

        <FilterAccordion
          alwaysOpen={true}
          choices={informationRequests}
          value={query.information_request}
          valueField="number"
          displayField="number"
          fieldName="Pedidos LAI"
          isHovering={false}
          onChange={(id) => {
            pushQuery("information_request", id)
          }}
        />
      </VStack>

      <VStack
        width="100%"
        overflow="hidden"
        marginLeft={{base:"0", lg: "32px !important", xl: "40px !important"}}
        alignItems="flex-start"
        flex="1"
      >
        <SwitchResource route={query}/>
      </VStack>
    </Stack>
  )
}