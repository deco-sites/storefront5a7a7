interface Props {
  text: string;
  showMenu?: boolean
}

export interface Returns {
  text: string
}

export default function loader({ text  = "Capy" }: Props): Returns {
  return { 
    text,
  }
}