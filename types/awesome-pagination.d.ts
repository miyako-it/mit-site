export type PageContextByPaginate = {
  isCreatedByStatefulCreatePages: boolean
  pageNumber: number
  humanPageNumber: number
  skip: number
  limit: number
  numberOfPages: number
  previousPagePath: string | undefined
  nextPagePath: string | undefined
}
