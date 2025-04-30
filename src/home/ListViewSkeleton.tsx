import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

const dummyList = [1, 2, 3, 4, 5, 6]

export default function ListViewSkeleton() {
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageList cols={3} gap={8}>
        {dummyList.map(s => (
          <ImageListItem key={s}>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={300}
              height={444}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={300}
              sx={{ fontSize: "1rem" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}
