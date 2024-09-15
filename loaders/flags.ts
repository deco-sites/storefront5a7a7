
interface Variant<T> {
  variants: Array<[string,T]>;
}

interface BooleanVariants extends Variant<boolean> {
  // variants: [{key:'on',val:true},{key:'off',val:false}];
  defaultVariant: 'on'
}
interface StringVariants extends Variant<string> {
  variants: Array<[string,string]>
}
interface NumberVariants extends Variant<number> {}

/**
 * The base flag object; no title/description here, allows for better UX, keep it in the overrides
 */
interface Flag {
  key: string;
  /**
   * @default ENABLED
   */
  state: "ENABLED" | "DISABLED";
  /**
   * The variant to serve if no dynamic targeting applies (including if the targeting returns null).
   * @format dynamic-options
   * @options {{{variants}}}
   */
  defaultVariant: string;
}

type VariantFlag<T> = T;
/**
 * @title Boolean
 */
type BooleanFlag = VariantFlag<BooleanVariants>;
type StringFlag = VariantFlag<StringVariants>;
type NumberFlag = VariantFlag<NumberVariants>;
type Flags = Flag & (StringVariants | NumberVariants)

interface Props {
  flags: Array<Flags>;
  text: string;
  showMenu?: boolean
  names: string[];
  /**
   * @format dynamic-options
   * @options {{{names}}}
   */
  name: string;
}

export interface Returns {
  text: string
}

export default function loader({ text  = "Capy" }: Props): Returns {
  return { 
    text,
  }
}