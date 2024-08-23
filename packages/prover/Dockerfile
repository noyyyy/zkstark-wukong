FROM ciimage/python:3.9 as base_image

RUN apt update && apt install git -y

RUN git clone https://github.com/starkware-libs/stone-prover.git /app

RUN /app/install_deps.sh

WORKDIR /app/
RUN ./docker_common_deps.sh
RUN chown -R starkware:starkware /app

# Build.
RUN bazel build //...

FROM base_image

# Run tests.
RUN bazel test //...

FROM rust:1-bullseye as cairo_runner

RUN mkdir /vm
WORKDIR /vm

RUN git clone https://github.com/lambdaclass/cairo-vm.git /vm
RUN cd cairo1-run && cargo build --release

FROM debian:12

# Copy cpu_air_prover and cpu_air_verifier.
COPY --from=base_image /app/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /bin/cpu_air_prover
COPY --from=base_image /app/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /bin/cpu_air_verifier
COPY --from=base_image /lib/x86_64-linux-gnu/libdw.so.1 /lib/x86_64-linux-gnu/libdw.so.1
COPY --from=base_image /lib/x86_64-linux-gnu/libelf.so.1 /lib/x86_64-linux-gnu/libelf.so.1


COPY --from=cairo_runner /vm/target/release/cairo1-run /bin/cairo1-run

RUN mkdir /data
WORKDIR /data

CMD ["tail", "-f", "/dev/null"]


