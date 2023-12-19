/*

FINANCE

REACT BIG PROJECT FULL STACK

Keep in mind yarnpkg.com/package/react-quill and 
yarnpkg.com for useful things like for making blog
like header,formats,etc.

npm add multer // look into this

SOFTWARE ARCHITECTURE

What is Software Architecture?

Software architecture has many definitions one of the
most famous is from Ralph Johnson
"Architecture is about the important stuff.
Whatever that is"

In software architecture we focus more on the structure
more than the implementation details. 

Focus on structure
Anticipate expensive choices
Core decisions for high quality

Software architecture is also about making the
expensive choices that are costly to change after they are
implemented. It's also about making explicit the core
decisions that will allow the software to have high
quality.

Building an eCommerce Site

First: Get the Context

What should the system do?

Search Inventory
Buy Products
Check Reviews
Review Past Orders
Etc

These are the functional requirements of the application

Need to focus on how should the system behave

Also called the Non-Functional Requirements
These are sometimes defined as the "ilities" that the system 
can have like: functionality,reliability,usability,
efficiency,these kinds of things

How

HTML

A lot of times in HTML the spacing is set to 1

When doing line height try to keep to percentage unless otherwise

em means this is the decimal of the perecentage you want
Ex: 1.2 times the size of the current font
So if your current font is 10 it would increase it to a 12
try to keep font size for a:hover,visited and link the same
20pt for all of them for example

When making boxes try an intial height first before a final one

Try graphing width of boxes,gutters,borders or paddings whatever.

Ex: 1000-25-25 = 950 px to work with make sure everything fits in
that

Keep in minds margin-left ec. for boxes (more boxes)
25 for 1 left and 15 for the right
150 width
for bottom total is 190 25 + 15 + 150 = 190

How much is left 950 - 380 = 570 left over

Use this to determine the size of your boxes

FINANCE

Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, buildings, technology, or equipment. CapEx is often used to undertake new projects or investments by a company.

Procurement is obtaining or purchasing goods or services, typically for business purposes. Procurement is most commonly associated with businesses because companies must solicit services or purchase goods, usually on a relatively large scale.


SCALA

Gotta import Array._ before doing anything with concat

// Scala - Arrays

import Array._
object Demo {
  val myarray: Array[Int] = new Array[Int](4);
  val myarray2 = new Array[Boolean](5);
  val myarray3 = Array(1,2,3,4,5,6,8);
  def main(args: Array[String]) {
    myarray(0) = 20;
    myarray(1) = 50;
    myarray(2) = 10;
    myarray(3) = 30;
    println(myarray3.length);
    val result = concat(myarray, myarray3);
    for (x <- result) {
      println(x);
    }

    for (i <- 0 to (myarray.length - 1)) {
     println(myarray(i));
    }
  }
}

const or maybe cons is represented by :: in scala

PYTHON

Find and replace
Press   Ctrl   F   to display the search bar. Press   Ctrl   R   to add another field where you can type the replace string.
In the Find in Files dialog, you can switch to replace by pressing   Ctrl   Shift   R  . Similarly, press   Ctrl   Shift   F   to hide the Replace with field and switch to regular search.


Compute Unified Device Architecture

CUDA® is a parallel computing platform and programming model developed by NVIDIA for general computing on graphical processing units (GPUs). With CUDA, developers are 
able to dramatically speed up computing applications by harnessing the power of GPUs.

jupyter notebook (in anaconda prompt to open it up)

anaconda prompt commands

pip install torch numpy

In VSC can install python extension and make files with .ipynb at the end

GENERATIVE AI

Langchain is a framework that offers flexible abstractions that can be used by developers
to build LLM driven applications, it enables applications that are data aware,so
connecting a model to other sources; agentic, allowing a language model to interact
with it's environment

Vertex AI gives you access to Google's generative AI to build AI-powered applications.
It offers integration with the LangChain's Python SDK, making it convenient to build
applications on top of Vertex AI 

Vertex AI and LangChain have integrations for services like a Vertex AI PaLM API 
for text,chat and text-embeddings, Vertex AI Vector Search, Vertex AI Search

Vertex AI Extensions

A platform to create enterprise extensions and extension-powered applications

Basic example on using the PaLM API and LangChain for summarizing large documents:

First to use the Vertex AI PaLM API and LangChain you make sure that the
vertex AI and LangChain SDK are installed in your environment

pip install google-cloud-aiplatform langchain

Next you have to import the libraries

import langchain
from langchain.llms import VertexAI
from langchain import PromptTemplate

vertex_llm_text = VertexAI(model_name="text-bison@001")

Next you will have to create your prompt templates that you will use as predefined
recipes

map_prompt_template = """Write a summary of this chunk of text that includes
the main points and any important details. {text}"""

map_prompt = PromptTemplate(template=map_prompt_template,
input_variables=["text"])

combine_prompt_template = """Write a concise summary of the following text
delimited by triple backquotes.Return your response in bullet points which covers
the key points of the text.
```{text}```
BULLET POINT SUMMARY:
"""

After defining the templates you intitalize the associated MapReduce chain, and then
generate summaries using the chain.

map_reduce_chain = load_summarize_chain(
    vertex_llm_text,
    chain_type="map_reduce",
    map_prompt=map_prompt,
    combine_prompt=combine_prompt,
    return_intermediate_steps=True,
)

map_reduce_outputs = map_reduce_chain({"input_documents": pages})

LangChain is an abstraction layer

Use cases

Improve customer support through chat 

Explore vast amounts of unstructured data through conversational interfaces
and summarization

Summarize large documents

And many more

Keep in mind https://goo.gle/generative-ai-overview
and https://goo.gle/generative-ai-learn-resources
and https://goo.gle/GenAIforDevs

In the description of Build AI-powered apps on Vertex AI with LangChain
from Google Cloud Tech































*/