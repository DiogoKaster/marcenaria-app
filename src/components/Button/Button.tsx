interface IButtonProps {
    name: string
}

export default function Button(props: IButtonProps) {
    return <button>{props.name}</button>
}