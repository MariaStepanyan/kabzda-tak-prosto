type PageTitleType = {
  title: string
}

export function PageTitle(props: PageTitleType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}
