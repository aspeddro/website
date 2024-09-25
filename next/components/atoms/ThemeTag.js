import { Tag } from "@chakra-ui/react";

export function ThemeTag({ slug, ...style }) {
  return (
    <Tag
      position="relative"
      fontSize="10px"
      whiteSpace="nowrap"
      borderRadius="8px"
      padding="2px 8px"
      color="#252A32"
      backgroundColor="#DEDFE0"
      cursor="pointer"
      letterSpacing="0.2px"
      fontWeight="300"
      fontFamily="ubuntu"
      {...style}
    >
      <a href={`/dataset?tag=${slug}`} target="_blank">
        {slug}
      </a>
    </Tag>
  );
}
