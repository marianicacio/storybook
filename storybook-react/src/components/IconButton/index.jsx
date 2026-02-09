import './styles.css'

export default function IconButton({source, tamanho}) {
    return (
        <button type="button">
            <img src={source} width={tamanho} alt="" />
        </button>
    )
}