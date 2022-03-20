import { SecurityDiv } from "./style";

export default function SecuritySection() {
    return (
        <SecurityDiv name='security'>
            <p className="security-title">Regras de Saúde e Segurança</p>
            <ul>
                <li>Espaço de tempo estendido entre os agendamentos</li>
                <li>Somente com horário agendado</li>
                <li>Desinfetamos todas as superfícies do local</li>
                <li>Funcionários usam máscaras</li>
                <li>Ventilação adequada</li>
                <li>Álcool em gel disponível para uso dos clientes</li>
                <li>Necessário uso de máscara (traga a sua)</li>
            </ul>
        </SecurityDiv>
    )
}