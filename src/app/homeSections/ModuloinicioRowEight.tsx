import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function ModuloinicioRowEight() {
  return (
    <div>
      <div className="bg-white-a700">
        <div className="flex flex-col items-center bg-white-a700 py-14 md:py-5">
          <div className="container-xs flex flex-col items-center gap-[50px] md:px-5">
            <div className="ml-72 mr-[292px] flex flex-col items-center gap-2 self-stretch md:mx-0">
              <Heading size="heading2xl" as="h2" className="!text-blue_gray-600">
                <span className="text-black-900">Síguenos</span>
                <span className="text-blue_gray-600">&nbsp;</span>
                <span className="text-black-900">en nuestras Redes Sociales</span>
              </Heading>
              <Text as="p" className="self-stretch text-center leading-[30px] !text-black-900">
                ¡Sé el primero en conocer nuestros eventos y nuestras ultimas publicaciones!
              </Text>
            </div>
            <div className="self-stretch">
              <div className="flex gap-7 md:flex-col">
                <div className="flex flex-1 flex-col gap-7 md:self-stretch">
                  <Img
                    src="img_image_22.png"
                    width={284}
                    height={284}
                    alt="Imagetwentytwo"
                    className="h-[284px] rounded-[24px] object-cover"
                  />
                  <Img
                    src="img_image_24.png"
                    width={284}
                    height={284}
                    alt="Imagetwentyfour"
                    className="h-[284px] rounded-[24px] object-cover"
                  />
                </div>
                <Img
                  src="img_image_21.png"
                  width={596}
                  height={596}
                  alt="Imagetwentyone"
                  className="h-[596px] w-[596px] rounded-[24px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col gap-7 md:self-stretch">
                  <Img
                    src="img_image_23.png"
                    width={284}
                    height={284}
                    alt="Imagetwentythre"
                    className="h-[284px] w-[284px] rounded-[24px] object-cover"
                  />
                  <Img
                    src="img_image_21_284x284.png"
                    width={284}
                    height={284}
                    alt="Imagetwentyone"
                    className="h-[284px] w-[284px] rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>
            <Button className="flex h-[76px] min-w-[200px] flex-row items-center justify-center rounded-lg bg-gray-900 px-[34px] text-center text-[20px] font-bold text-white-a700 sm:px-5">
              Síguenos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
