"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(1, "ユーザー名を1文字以上で入力してください。")
    .max(10, "ユーザー名を10文字以下で入力してください"),
  tiq: z.string().min(2, "タイトルを2文字以上で入力してください。"),
  content: z
    .string()
    .min(5, "内容を5文字以上で入力してください。")
    .max(120, "内容を120文字以下で入力してください"),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      tiq: "",
      content: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const { username, tiq, content } = value;

    try {
      await fetch("https://post-ntnqr1tl7-kameiryohei.vercel.app/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, tiq, content }),
      });
      toast.success("投稿できました！");
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("投稿に失敗しました");
      console.error(err);
    }
  }

  return (
    <div className="space-y-3 justify-center px-24">
      <h1 className="py-3 text-2xl font-bold">投稿作成</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ユーザー名を入力
                  "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tiq"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="タイトルを入力" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="本文を入力"
                    {...field}
                    className="resize-none h-40"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePage;
