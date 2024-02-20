type PageTitleType = {
  title: string
}

export function PageTitleSecret(props: PageTitleType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}
