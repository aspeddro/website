import {
  Center,
  Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CalendarComunIcon } from "../../public/img/icons/calendarIcon";
import TimeIcon from "../../public/img/icons/timeIcon";

export default function TemporalCoverage ({
  value,
  text,
  iconSettings = {width: "18px", height: "18px", fill: "#D0D0D0"},
  textSettings = {}
}) {
  const [startDate, setStartDate] = useState({})
  const [endDate, setEndDate] = useState({})

  useEffect(() => {
    setStartDate({    
      second:value?.startSecond,
      minute:value?.startMinute,
      hour:value?.startHour,
      day:value?.startDay,
      month:value?.startMonth,
      year:value?.startYear
    })
    setEndDate({    
      second:value?.endSecond,
      minute:value?.endMinute,
      hour:value?.endHour,
      day:value?.endDay,
      month:value?.endMonth,
      year:value?.endYear
    })
  },[value])

  // value = {
  //   startSecond: "30",
  //   startMinute: "24",
  //   startHour: "20",
  //   startDay: "12",
  //   startMonth: "12",
  //   startYear: "2022",
  //   endSecond: "0",
  //   endMinute: "48",
  //   endHour: "8",
  //   endDay: "24",
  //   endMonth: "6",
  //   endYear: "2023",
  // }

  if(!value) return text
  if(startDate === null && endDate === null) return text

  const TextDate = ({value}) => {
    return (
      <Text
        color="#252A32"
        fontSize="14px"
        lineHeight="24px"
        letterSpacing="0.5px"
        fontWeight="300"
        fontFamily="Lato"
        {...textSettings}
      >
        {value}
      </Text>
    ) 
  } 

  function Dates ({ dates, ...props }) {
    const yearMonthDay = []
    const hourMinuteSecond = []

    if(dates.second) hourMinuteSecond.push(`${dates.second}s`)
    if(dates.minute) hourMinuteSecond.push(`${dates.minute}min`)
    if(dates.hour) hourMinuteSecond.push(`${dates.hour}h`)
    if(dates.day) yearMonthDay.push(dates.day)
    if(dates.month) yearMonthDay.push(dates.month)
    if(dates.year) yearMonthDay.push(dates.year)

    yearMonthDay.reverse()
    hourMinuteSecond.reverse()

    if(dates === null) return ""

    return (
      <Center marginRight="10px" {...props}>
        <CalendarComunIcon {...iconSettings} marginRight="6px"/> <TextDate value={yearMonthDay.join("-")}/>
        {hourMinuteSecond.length > 0 && <><TimeIcon {...iconSettings} margin="0 6px 0 8px"/> <TextDate value={hourMinuteSecond.join(" ")}/></>}
      </Center>
    )
  }

  return (
    <Center>
      <Dates dates={startDate}/> - <Dates dates={endDate} margin="0 0 0 10px"/>
    </Center>
  )
}