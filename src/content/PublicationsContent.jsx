import React from "react"
import styled from "@emotion/styled-base"

const PublicationItem = styled("div")`
  padding: 0 1em 1em 0;
`

const PublicationsContent = () => (
  <>
    <PublicationItem>
      <b>
        A Python library for probabilistic analysis of single-cell omics
      </b>
      <br />
      Adam Gayoso*, Romain Lopez*, Galen Xing*, Pierre Boyeau, Valeh Valiollah Pour
      Amiri, <b>Justin Hong</b>, Katherine Wu, Michael Jayasuriya, Edouard Mehlman, Maxime
      Langevin, Yining Liu, Jules Samaran, Gabriel Misrachi, Achille Nazaret, Oscar Clivio,
      Chenling Xu, Tal Ashuach, Mariano Gabitto, Mohammad Lotfollahi, Valentine Svensson,
      Eduardo da Veiga Beltrame, Vitalii Kleshchevnikov, Carlos Talavera-López, Lior Pachter,
      Fabian J. Theis, Aaron Streets, Michael I. Jordan, Jeffrey Regier, and Nir Yosef.
      <br />
      <i>Nature Biotechnology</i> (2022).{" "}
      <a href="https://doi.org/10.1038/s41587-021-01206-w">
        [PDF]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>
        Likelihood-based deconvolution of bulk gene expression data using
        single-cell references
      </b>
      <br />
      Dan D Erdmann-Pham*, Jonathan Fischer*, <b>Justin Hong</b>, and Yun S
      Song.
      <br />
      <i>Genome Research</i> (2021).{" "}
      <a href="https://genome.cshlp.org/content/31/10/1794.full.pdf+html">
        [PDF]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>
        A Likelihood-based Deconvolution of Bulk Gene Expression Data Using
        Single-cell References
      </b>
      <br />
      <b>Justin Hong</b>, Dan D Erdmann-Pham, Jonathan Fischer, and Yun S Song.
      <br />
      <i>Master’s Thesis</i>. University of California, Berkeley, 2021.{" "}
      <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2021/EECS-2021-21.pdf">
        [PDF]
      </a>
      .
    </PublicationItem>
    <PublicationItem>
      <b>Robust Federated Learning in a Heterogeneous Environment</b>
      <br />
      Avishek Ghosh*, <b>Justin Hong</b>*, Dong Yin, and Kannan Ramchandran.
      <br />
      <i>arXiv</i> (2019) (Presented at{" "}
      <i>ICML Workshop on Privacy and Security in ML</i>, 2019).{" "}
      <a href="https://arxiv.org/abs/1906.06629">[PDF]</a>.
    </PublicationItem>
  </>
)

export default PublicationsContent
