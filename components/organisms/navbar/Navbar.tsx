import CategoryList from "@/components/molecules/navbar/CategoryList";
import Title from "@/components/molecules/navbar/Title";
import UserActions from "@/components/molecules/navbar/UserActions";

export default function Navbar() {
  return (
    <nav className="h-20 sticky top-0 max-w-[1920px] mx-auto flex justify-between items-center text-2xl px-6">
      <CategoryList />
      <Title/>
      <UserActions />
    </nav>
  );
}
