echo "Running docker image instrumentisto/flex-sdk to build RTMP.swf";

docker run --rm -it -v $(pwd):/app instrumentisto/flex-sdk mxmlc \
  -define CONFIG::LOGGING false \
  -define CONFIG::MOCK false \
  -define CONFIG::PLATFORM true \
  -define CONFIG::FLASH_10_1 true \
  -default-background-color=0x000000 \
  -default-size=640,360 \
  -language=as3 \
  -output=./public/RTMP.swf \
  -optimize=true \
  -compress=true \
  -use-gpu=true \
  -target-player=30.0 \
  -use-network=false \
  ./src/RTMP.as -library-path+=./src/OSMF.swc:./src/SMILPlugin.swc \
  ;
