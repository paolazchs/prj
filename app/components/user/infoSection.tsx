import Image from "next/image"
import CarC from '@/public/CarC.jpeg';
export default function InfoSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <div className="bg-gray-100 rounded-lg p-12 grid md:grid-cols-2 gap-8 items-center border border-gray-300 w-full min-h-[400px]">

        <div className="bg-gray-100 rounded-lg p-8 grid md:grid-cols-2 gap-8 items-center border border-gray-300">

        <Image

          src={CarC}
          alt=" "
          className="rounded"

        />
        <div>
          <h3 className="font-bold text-xl mb-3">What is Lorem Ipsum?</h3>
          <p className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing industry.
            <p className="text-sm text-gray-400"></p> Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
