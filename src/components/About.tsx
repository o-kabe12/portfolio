import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const About = () => {
  const [showAnime, setShowAnime] = useState(true);

  const AnimeList: string[] = [
    "ソードアート・オンライン",
    "STEINS;GATE",
    "ゆるキャン△",
    "mono",
    "この素晴らしい世界に祝福を!",
    "Re:ゼロから始める異世界生活",
    "葬送のフリーレン",
    "Dr.STONE",
    "氷菓",
    "小市民シリーズ",
    "無職転生"
  ]

  const splideOptions = {
    type: 'fade',
    rewind: true,
    perPage: 1,
    autoplay: true,
    interval: 5000,
    arrows: false,
    pagination: false,
    drag: false,
    pauseOnHover: false,
  };


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:mt-8 lg:mt-16 items-center">
          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 
                            border border-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/okabe-profile.jpg"
                  alt="Okabe Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  こんにちは！ <span className="text-white font-semibold">Okabe</span>です。
                  <br />
                  私は、24歳のフロントエンドエンジニアです。主にWebサイトを制作しています。現在は、Next.jsやTypeScriptを学習中で、Webアプリを作る事が目標です。また、AIを活用した開発を行い、正確で迅速な開発を目指しています。
                  <br />
                  <br />
                  趣味は、風景写真を撮ることと筋トレです。アニメは大好きなので、よく見ています。書く事がないので、好きなアニメと撮った風景写真でも載せておきます。
                </p>
                <div>
                  <div className="flex justify-center my-10">
                    <button
                      className={`w-[150px] px-4 py-2 rounded-l-lg ${showAnime ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-blue-600`}
                      onClick={() => setShowAnime(true)}
                    >
                      好きなアニメ
                    </button>
                    <button
                      className={`w-[150px] px-4 py-2 rounded-r-lg ${!showAnime ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-blue-600`}
                      onClick={() => setShowAnime(false)}
                    >
                      風景写真
                    </button>
                  </div>
                  {showAnime ? (
                    <>
                      <h3 className='text-center font-bold mb-4'>好きなアニメ</h3>
                      <div className="flex items-center sm:max-h-[360px] sm:min-h-[360px] sm:h-[360px] max-h-[400px] min-h-[400px] h-[400px] overflow-y-auto border border-gray-300 rounded-lg">
                        <ul className="p-6">
                          {AnimeList.map((anime, index) => (
                            <li key={index} className="text-gray-300 text-lg">
                              {anime}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-center font-bold mb-4">風景写真</h3>
                      <div className="slider-container flex items-center justify-center p-6 border border-gray-300 rounded-lg sm:max-h-[360px] sm:min-h-[360px] sm:h-[360px] max-h-[400px] min-h-[400px] h-[400px]">
                        <Splide options={splideOptions} aria-label="Fading Slider">
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_001.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_002.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_003.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_004.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_005.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_006.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_007.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="flex justify-center h-auto sm:h-full">
                              <img src="/images/img_008.jpg" alt="" className="w-auto h-full" />
                            </div>
                          </SplideSlide>
                        </Splide>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;