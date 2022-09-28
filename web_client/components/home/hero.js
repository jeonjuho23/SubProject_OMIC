import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="text-center lg:w-2/3 w-full">
        <Animation />
        <br />
        <br />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          객체 탐색 모자이크 서비스
        </h1>
        <p className="mb-8 leading-relaxed">
          원하는 객체를 AI가 탐색해서 모자이크 해준다..!
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            사진 or 동영상 업로드하기
          </button>
        </div>
      </div>
    </>
  );
}
