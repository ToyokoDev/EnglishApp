import VocabGame , {VocabWord} from "@/components/VocabGame"

type Props = {}

export default async function Page(params:Props) {
  const MOCK_WORDS: VocabWord[] = [
  { id: '1', vocab: 'Persistent', definition: 'Kiên trì, bền bỉ', type: 'adj' },
  { id: '2', vocab: 'Meticulous', definition: 'Tỉ mỉ, kỹ lưỡng', type: 'adj' },
  { id: '3', vocab: 'Resilient', definition: 'Kiên cường, phục hồi nhanh', type: 'adj' },
];
  return (
    <VocabGame words={MOCK_WORDS} />
  )
}