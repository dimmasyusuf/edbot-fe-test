import ProgressAppBar from "@/components/ProgressAppBar";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressAppBar />
      {children}
    </>
  );
}
