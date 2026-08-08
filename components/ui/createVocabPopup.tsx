"use client";

import { useState, SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { createVocabSchema } from "@/zod_schema/vocab_schema";
import { createVocabAction } from "@/actions/vocab.action";
type Props = {
    userId: string,
}
export function CreateVocabPopup({ userId }: Props) {
    const [open, setOpen] = useState(false);
    const [word, setWord] = useState("");
    const [type, setType] = useState('noun')
    const [definition, setDefinition] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const resetForm = () => {
        setWord("");
        setDefinition("");
        setType("")
        setError("");
    };

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        const result = createVocabSchema.safeParse({ word, definition, type })
        if (!result.success) {
            setError(result.error.issues[0]?.message || "Lỗi dữ liệu!");
            return;
        }
        const res = await createVocabAction({
            userId,
            word,
            definition,
            type
        })
        resetForm();
        setOpen(false); // Tự động đóng Dialog khi lưu xong
    };

    return (
        <Dialog open={open} onOpenChange={(v) => {
            setOpen(v);
            if (!v) resetForm(); // Xóa sạch dữ liệu khi bấm đóng Dialog
        }}>
            <DialogTrigger asChild>
                <Button>Add Vocab</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-sm">
                {/* Đặt thẻ <form> BÊN TRONG DialogContent */}
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Thêm từ vựng mới</DialogTitle>
                        <DialogDescription>
                            Nhập từ tiếng Anh và nghĩa để lưu vào danh sách học của bạn.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="py-4">
                        <Field>
                            <Label htmlFor="vocab-word">Từ vựng</Label>
                            <Input
                                id="vocab-word"
                                placeholder="VD: Ephemeral"
                                value={word}
                                onChange={(e) => {
                                    setWord(e.target.value);
                                    if (error) setError("");
                                }}
                            />
                        </Field>

                        <Field>
                            <Label htmlFor="vocab-definition">Nghĩa của từ</Label>
                            <Input
                                id="vocab-definition"
                                placeholder="VD: Phù du, ngắn ngủi"
                                value={definition}
                                onChange={(e) => {
                                    setDefinition(e.target.value);
                                    if (error) setError("");
                                }}
                            />
                        </Field>
                        <Field>
                            <Label htmlFor="vocab-type">Type</Label>
                            <ToggleGroup type="single" variant="outline" value={type} onValueChange={(val) => {
                                if (val) setType(val)
                            }}>
                                <ToggleGroupItem value="noun" aria-label="Toggle all">
                                    Noun
                                </ToggleGroupItem>
                                <ToggleGroupItem value="verb" aria-label="Toggle missed">
                                    Verb
                                </ToggleGroupItem>
                                <ToggleGroupItem value="adj" aria-label="Toggle missed">
                                    Adj
                                </ToggleGroupItem>
                                <ToggleGroupItem value="adv" aria-label="Toggle missed">
                                    Adv
                                </ToggleGroupItem>
                                <ToggleGroupItem value="idiom" aria-label="Toggle missed">
                                    Idiom
                                </ToggleGroupItem>
                                <ToggleGroupItem value="other" aria-label="Toggle missed">
                                    Other
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </Field>

                        {error && (
                            <p className="text-sm font-medium text-destructive">{error}</p>
                        )}
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Hủy
                            </Button>
                        </DialogClose>
                        <Button type="submit">Lưu từ vựng</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}