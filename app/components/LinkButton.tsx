import Link from 'next/link';

const LinkButton = ({href, text, target = "_self"}) => {
  return (
      <Link href={href} target={target} className={`bg-primary hover:bg-primary-light active:bg-primary-dark px-4 py-2 rounded-xl w-fit font-bold transition-colors`}>
          {text}
      </Link>
  )
}

export default LinkButton;