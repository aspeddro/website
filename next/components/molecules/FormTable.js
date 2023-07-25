import {
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import RoundedButton from "../atoms/RoundedButton";
import SelectSearch from "../atoms/SelectSearch";

import {
  postTable,
  getTableEdit
} from "../../pages/api/tables"

export default function FormTable({
  id,
  status,
  organizations,
  users,
  licenses,
  pipeline
}) {
  const router = useRouter()
  const { query } = router

  const [isSuccess, setIsSuccess] = useState({})
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    description: "",
    status: "",
    license: "",
    partnerOrganization: "",
    pipeline: "",
    isDirectory: false,
    publishedBy: "",
    dataCleanedBy: "",
    dataCleaningDescription: "",
    dataCleaningCodeUrl: "",
    rawDataUrl: "",
    auxiliaryFilesUrl: "",
    architectureUrl: "",
    sourceBucketName: "",
    uncompressedFileSize: 0,
    compressedFileSize: 0,
    numberRows: 0,
    numberColumns: 0,
    isClosed: false,
  })

  const fetchTable = async (id) => {
    if(!id) return 
    const tableData = await getTableEdit(id)

    setFormData({
      slug: tableData?.slug || "",
      name: tableData?.name || "",
      description: tableData?.description || "",
      status: tableData?.status || "",
      license: tableData?.license || "",
      partnerOrganization: tableData?.partnerOrganization || "",
      pipeline: tableData?.pipeline || "",
      isDirectory: tableData?.isDirectory || false,
      publishedBy: tableData?.publishedBy || "",
      dataCleanedBy: tableData?.dataCleanedBy || "",
      dataCleaningDescription: tableData?.dataCleaningDescription || "",
      dataCleaningCodeUrl: tableData?.dataCleaningCodeUrl || "",
      rawDataUrl: tableData?.rawDataUrl || "",
      auxiliaryFilesUrl: tableData?.auxiliaryFilesUrl || "",
      architectureUrl: tableData?.architectureUrl || "",
      sourceBucketName: tableData?.sourceBucketName || "",
      uncompressedFileSize: tableData?.uncompressedFileSize || 0,
      compressedFileSize: tableData?.compressedFileSize || 0,
      numberRows: tableData?.numberRows || 0,
      numberColumns: tableData?.numberColumns || 0,
      isClosed: tableData?.isClosed || false,
    })
  }

  useEffect(() => {
    fetchTable(query.table)
  },[query.table === id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async () => {
    let validationErrors = {}

    if(!formData.slug) validationErrors.slug = "O slug é obrigatório"
    if(!formData.name) validationErrors.name = "O name é obrigatório"
    if(formData.dataCleaningCodeUrl !== "") {
      if(!formData.dataCleaningCodeUrl.startsWith("https")) validationErrors.dataCleaningCodeUrl = "Insira uma url válida"
    }
    if(formData.rawDataUrl !== "") {
      if(!formData.rawDataUrl.startsWith("https")) validationErrors.rawDataUrl = "Insira uma url válida"
    }
    if(formData.auxiliaryFilesUrl !== "") {
      if(!formData.auxiliaryFilesUrl.startsWith("https")) validationErrors.auxiliaryFilesUrl = "Insira uma url válida"
    }
    if(formData.architectureUrl !== "") {
      if(!formData.architectureUrl.startsWith("https")) validationErrors.architectureUrl = "Insira uma url válida"
    }

    if(Object.keys(validationErrors).length > 0) return setErrors(validationErrors)

    const result = await postTable(formData, query.dataset)
    if(result === undefined) return setIsSuccess({notSuccess: true})
    setIsSuccess({success: true, tableId: result})
  }

  return (
    <Stack
      display="flex"
      flexDirection="column"
      width="600px"
      gap="20px"
      color="#252A32"
      fontFamily="Lato"
    >
      <Stack flexDirection="row" gap="8px" spacing={0}>
        <FormControl isRequired isInvalid={!!errors.slug}>
          <FormLabel>Slug</FormLabel>
          <Input name="slug" value={formData.slug} onChange={handleChange} />
          <FormErrorMessage>{errors.slug}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormControl>

      <Stack flexDirection="row" gap="8px" spacing={0}>
        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value={""}>...</option>
            {status.map((elm) => {
                return (
                  <option value={elm?.node?._id}>{elm?.node?.name}</option>
                )
              })
            }
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>License</FormLabel>
          <SelectSearch 
            name="license"
            value={formData.license}
            onChange={(e) => setFormData({...formData, license: e})}
            options={licenses}
            displayName="slug"
          />
        </FormControl>
      </Stack>

      <Stack flexDirection="row" gap="8px" spacing={0}>
        <FormControl >
          <FormLabel>Partner organization</FormLabel>
          <SelectSearch 
            name="partner organization"
            value={formData.partnerOrganization}
            onChange={(e) => setFormData({...formData, partnerOrganization: e})}
            options={organizations}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Pipeline</FormLabel>
          <SelectSearch 
            name="pipeline"
            value={formData.pipeline}
            onChange={(e) => setFormData({...formData, pipeline: e})}
            options={pipeline}
            displayName="githubUrl"
          />
        </FormControl>
      </Stack>

      <FormControl width="50%">
        <FormLabel>Is directory</FormLabel>
        <Select
          name="isDirectory"
          value={formData.isDirectory}
          onChange={handleChange}
        >
          <option value={null}>Desconhecido</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Select>
      </FormControl>

      <Stack flexDirection="row" gap="8px" spacing={0}>
        <FormControl>
          <FormLabel>Published by</FormLabel>
          <SelectSearch 
            name="publishedBy"
            value={formData.publishedBy}
            onChange={(e) => setFormData({...formData, publishedBy: e})}
            options={users}
            keyId="id"
            displayName="email"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Data cleaned by</FormLabel>
          <SelectSearch
            name="dataCleanedBy"
            value={formData.dataCleanedBy}
            onChange={(e) => setFormData({...formData, dataCleanedBy: e})}
            options={users}
            keyId="email"
            displayName="email"
          />
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel>Data cleaning description</FormLabel>
        <Textarea
          name="dataCleaningDescription"
          value={formData.dataCleaningDescription}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isInvalid={!!errors.dataCleaningCodeUrl}>
        <FormLabel>Data cleaning code url</FormLabel>
        <Input name="dataCleaningCodeUrl" value={formData.dataCleaningCodeUrl} onChange={handleChange} />
        <FormErrorMessage>{errors.dataCleaningCodeUrl}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.rawDataUrl}>
        <FormLabel>Raw data url</FormLabel>
        <Input name="rawDataUrl" value={formData.rawDataUrl} onChange={handleChange} />
        <FormErrorMessage>{errors.rawDataUrl}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.auxiliaryFilesUrl}>
        <FormLabel>Auxiliary files url</FormLabel>
        <Input name="auxiliaryFilesUrl" value={formData.auxiliaryFilesUrl} onChange={handleChange} />
        <FormErrorMessage>{errors.auxiliaryFilesUrl}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.architectureUrl}>
        <FormLabel>Architecture url</FormLabel>
        <Input name="architectureUrl" value={formData.architectureUrl} onChange={handleChange} />
        <FormErrorMessage>{errors.architectureUrl}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Source bucket name</FormLabel>
        <Input name="sourceBucketName" value={formData.sourceBucketName} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Uncompressed file size</FormLabel>
        <Input
          type="number"
          name="uncompressedFileSize"
          value={formData.uncompressedFileSize}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Compressed file size</FormLabel>
        <Input
          type="number"
          name="compressedFileSize"
          value={formData.compressedFileSize}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Number rows</FormLabel>
        <Input
          type="number"
          name="numberRows"
          value={formData.numberRows}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Number columns</FormLabel>
        <Input
          type="numberRows"
          name="version"
          value={formData.numberColumns}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl
        display="flex"
        flexDirection="row"
        gap="8px"
      >
        <FormLabel margin="0 !important">Is Closed?</FormLabel>
        <Checkbox
          name="isClosed"
          checked={formData.isClosed}
          onChange={handleChange}
        />
      </FormControl>

      <RoundedButton
        margin="0 auto"
        width="200px"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Adicionar
      </RoundedButton>

      {isSuccess?.success &&
        <Alert
          status="success"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon
            width="40px"
            height="40px"
            marginRight={0}
          />
          <AlertTitle
            margin="16px 0 8px"
            fontSize="18px"
          >
            Table {query.table ? "atualizado" : "criado"} com sucesso! 
          </AlertTitle>
          <AlertDescription >
            O que gostaria de fazer agora?
          </AlertDescription>

          <Stack
            marginTop="16px"
            flexDirection="row"
            spacing={0}
            gap="10px"
          >
            <RoundedButton onClick={() => window.open(`/dataset/${isSuccess?.datasetId}`)}>
              Acessar página web
            </RoundedButton>

            <RoundedButton onClick={() => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...query,
                  table: isSuccess.tableId
                }
              })}}
            >
              Continuar editando
            </RoundedButton>
          </Stack>
        </Alert>
      }

      {isSuccess.notSuccess &&
        <Alert
          status="error"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon
            width="40px"
            height="40px"
            marginRight={0}
          />
          <AlertTitle
            margin="16px 0 8px"
            fontSize="18px"
          >
            Error ao {query.table ? "atualizar" : "criar"} table! 
          </AlertTitle>
        </Alert>
      }
    </Stack>
  )
}
